type TabHeaderProps = {
  heading: string
  subheading: string
}

export const TabHeader = ({ heading, subheading }: TabHeaderProps) => {
  return (
    <div className="flex items-center gap-2 md:flex-col md:items-start">
      <h3 className="text-left text-2xl font-medium">{heading}</h3>
      <h4 className="text-md text-foreground text-left">{subheading}</h4>
    </div>
  )
}
