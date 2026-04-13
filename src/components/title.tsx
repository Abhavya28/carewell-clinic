interface titleProps {
    headline: string,
    desc: string
}

const Title = ({headline, desc} : titleProps) => {
  return (
    <div className="flex flex-col gap-2 items-center mb-10">
        <p className="text-5xl font-semibold text-darkText font-heading">
            {headline}
          </p>

          <h2 className="text-lg text-lightText">
            {desc}
          </h2>
    </div>
  )
}

export default Title