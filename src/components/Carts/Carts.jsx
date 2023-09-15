

const Carts = () => {
    return (
        <div>
            <div className="md:w-80 bg-white rounded-xl space-y-5 p-6 my-10">
                <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining 7 hr</h2>
                <hr className="border-[1px] border-[#1C1B1B33]" />
                <h2 className="text-[#1C1B1B] text-lg font-bold">Course Name</h2>
                <p className="text-[#1C1B1B99] text-base font-normal">
                    1 Introduction to c programming <br />
                    2 Introduction to C++ for DSA <br />
                    3 Software Engineering
                </p>
                <hr className="border-[1px] border-[#1C1B1B33]" />
                <h2 className="text-[#1C1B1BCC] text-base font-medium">Total Credit Hour : 13</h2>
                <hr className="border-[1px] border-[#1C1B1B33]" />
                <h2 className="text-[#1C1B1BCC] text-base font-medium">Total Price : 48000 USD</h2>
            </div>
        </div>
    )
}
export default Carts