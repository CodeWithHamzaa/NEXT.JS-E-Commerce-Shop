import { useAppDispatch } from "../redux/hooks";
import { removeFromCart } from "../redux/features/cartSlice";
import Image from "next/image";

interface propsType {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity: number;
}

const CartProduct: React.FC<propsType> = ({
    id,
    name,
    price,
    img,
    quantity,
}) => {
    const dispatch = useAppDispatch();

    const getProductTotalPrice = () => {
        let totalPrice = 0;
        totalPrice = price * quantity;
        return totalPrice;
    }

    return (
        <div className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
            <div className="shrink-0 relative">
                <span
                    className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#6346f3] bg-white text-sm font-medium text-gray-600 shadow sm:-top-1 sm:-right-2">{quantity}</span>
                <Image className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src={img}
                    alt={name}
                    width={96}
                    height={96}
                />
            </div>

            <div className="relative flex flex-1 flex-col justify-between">
                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                        <p className="text-base mt-2 font-semibold text-gray-900">{name}</p>
                        <p className="mx-0 mt-2 mb-0 text-sm text-gray-400 tracking-widest">{quantity} x ${price}.00</p>
                    </div>

                    <div className="mt-6 flex items-end justify-between sm:mt-2 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-lg font-semibold tracking-wider text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${getProductTotalPrice()}.00</p>
                    </div>
                </div>

                <div className="absolute top-0 right-0 flex sm:bottom-2 sm:top-auto" onClick={() => dispatch(removeFromCart(id))}>
                    <button type="button"
                        className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className="">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;