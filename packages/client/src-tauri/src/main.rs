#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::process::Command;
use tauri::Manager;

#[tauri::command]
fn close_splashscreen(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
fn get_league_credentials() -> serde_json::Value {
  let league_path = get_league_installation_path();

  if league_path.is_empty() {
    return serde_json::json!({});
  }

  return get_lockfile(&league_path);
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![close_splashscreen, get_league_credentials])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

fn get_lockfile(league_path: &str) -> serde_json::Value {
  let lockfile_path = format!("{}\\lockfile", league_path);
  let lockfile = std::fs::read_to_string(lockfile_path).expect("Unable to read lockfile");
  let lockfile_split: Vec<&str> = lockfile.split(":").collect();

  let lockfile_json = serde_json::json!({
    "username": "riot",
    "processName": lockfile_split[0],
    "pid": lockfile_split[1],
    "port": lockfile_split[2],
    "password": lockfile_split[3],
    "protocol": lockfile_split[4],
    "address": "127.0.0.1",
  });

  return lockfile_json;
}

fn get_league_installation_path() -> String {
  let commandline = get_league_process();

  if commandline.len() > 0 {
    let cmd_string = String::from_utf8_lossy(&commandline);
    let split_cmd: Vec<&str> = cmd_string.split("\" ").collect();
    let league_dirty_path = split_cmd[0];

    // remove first char (")
    let league_path_with_exe = &league_dirty_path[1..];

    // remove every char after the last slash
    let league_installation_path_split = league_path_with_exe.split("/").collect::<Vec<&str>>();
    let league_installation_path =
      league_installation_path_split[0..league_installation_path_split.len() - 1].join("/");

    return league_installation_path;
  }

  return String::from("");
}

fn get_league_process() -> Vec<u8> {
  let script = if cfg!(target_os = "windows") {
    r#"(Get-CimInstance Win32_Process -Filter "name = 'LeagueClientUx.exe'").CommandLine"#
  } else {
    r#"ps x -o command= | grep 'LeagueClientUx'"#
  };

  return run_cmd(&script);
}

fn run_cmd(cmd: &str) -> Vec<u8> {
  let output = if cfg!(target_os = "windows") {
    Command::new("powershell")
      .arg("-Command")
      .arg(cmd)
      .output()
      .expect("failed to execute process")
  } else {
    Command::new("sh")
      .arg("-c")
      .arg(cmd)
      .output()
      .expect("failed to execute process")
  };

  return output.stdout;
}
