type CustomAmountButtonProps = {
  onClick?: () => void;
};
export const CustomAmountButton = ({ onClick }: CustomAmountButtonProps) => {
  return (
    <div className="rounded-full py-1 px-2 font-custom text-xs tracking-widest bg-skin-secondaryWithOpacity text-skin-neutral">
      Custom amount
    </div>
  );
};
