const Text = (props) => {
  return (
    <p className={`${props.basis} text-center`}>{props.children}</p>
  )
}

export default Text