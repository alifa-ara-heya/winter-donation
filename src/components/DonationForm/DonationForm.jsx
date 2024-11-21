import toast from "react-hot-toast";

const DonationForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        toast.success('Thank you ! We will reach your destination soon');
        e.target.reset();
    }
    return (

        <div className="flex flex-col justify-center items-center py-12">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-medium text-primary">Donation Form</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity of items</span>
                        </label>
                        <input type="text" placeholder="e.g.,2 jackets, 3 blankets" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item type</span>
                        </label>
                        <input type="text" placeholder="e.g., blanket, jacket, sweater" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup location</span>
                        </label>
                        <input type="text" placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional notes</span>
                        </label>
                        <input type="text" placeholder="optional" className="input input-bordered" required />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default DonationForm;