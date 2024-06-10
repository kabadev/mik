import Product from "../../components/Product";

export default function NewProduct() {
  return (
    <>
      <section className="p-4 bg-white m-4 rounded-lg">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="text-center sm:text-left mt-9">
            <p className="mt-1.5 text-lg font-bold">
              Fill all the fields to add a new product!
            </p>
          </div>
        </div>

        <hr className="my-8 h-px border-0 bg-gray-300" />
        <div className="my-10 max-sm:my-12 ">
          <Product />
        </div>
      </section>
    </>
  );
}
