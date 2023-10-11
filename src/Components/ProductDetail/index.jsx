import CloseIcon from "../../../assets/icons/CloseIcon";

const ProductDetail = () => {
  return (
    <aside className="flex flex-col fixed top-[68px] right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <CloseIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </aside>
  );
};

export { ProductDetail };
