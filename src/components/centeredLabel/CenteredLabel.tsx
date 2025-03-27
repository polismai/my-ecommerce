interface ICategoryLabelProps {
  children: React.ReactNode
}

export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({ children }) => {
  return (
    <div className="relative bg-white px-6 py-3 w-fit uppercase text-black text-[0.85rem] md:text-[1rem] font-bold rounded-sm z-[1] text-center">
      {children}
    </div>
  )
}

export default CenteredLabel;