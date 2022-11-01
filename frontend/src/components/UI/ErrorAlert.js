import './ErrorAlert.css'

const ErrorAlert = props => (
  <section className='error-alert'>
    <h2>Something went wrong!</h2>
    <p>{props.errorText}</p>
  </section>
)

export default ErrorAlert
