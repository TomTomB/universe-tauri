import { FirebaseError } from 'firebase/app';

export const unifyError = (error: unknown) => {
  let errMessage = 'Unknown error';

  if (error instanceof FirebaseError) {
    errMessage = error.message;
  } else if (
    error &&
    typeof error === 'object' &&
    Object.hasOwnProperty.call(error, 'statusText')
  ) {
    errMessage = (error as any).statusText;
  } else if (typeof error === 'string') {
    errMessage = error;
  }

  return errMessage;
};
