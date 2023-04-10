import { ApplicationError } from "../protocols";

export function conflitError(): ApplicationError {
  return {
    name: "ConflitError",
    message: "Conflit Error",
  };
}

export function notFound(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export default {
  conflitError,
  notFound,
};
