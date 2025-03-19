interface ICategoryLabelProps {
  children: React.ReactNode
}

export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full bg-blue-500">
      <div className="relative bg-white px-6 py-3 w-fit uppercase text-black text-[0.85rem] md:text-[1rem] font-bold rounded-sm z-[1]">
        {children}
      </div>
    </div>
  )
}

export default CenteredLabel;