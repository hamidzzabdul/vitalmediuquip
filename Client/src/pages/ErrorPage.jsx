import PageContent from "../Components/Common/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  let title = "An error occured"
  let message = "Something went wrong!"
  let status = error.status || 500
  if (error.status === 500) {
    message = error.data.message
  }
  if (error.status === 404) {
    status = 404
    title = "Page not found"
    message = "The page you are looking for is temporarily unavailable"
  }
  return <PageContent title={title} message={message} status={status} />
};

export default ErrorPage;
