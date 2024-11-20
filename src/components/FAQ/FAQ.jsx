import Heading from "../Heading/Heading";
import faqImg from '../../assets/faq.jpg'
const FAQ = () => {
    return (
        <div className="py-12 w-11/12 mx-auto">
            <Heading title={'Frequently Asked Questions'} subtitle={'Your Most Frequent Questions Answered'} />


            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 mx-auto" data-aos='fade-down'><img src={faqImg} alt="" className="w-full" /></div>
                {/* faqs */}
                <div className="py-12 space-y-3 md:w-1/2">
                    <div className="collapse collapse-arrow bg-primary/25">
                        <input type="checkbox" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What items can I donate?</div>
                        <div className="collapse-content">
                            <p>You can donate winter clothing such as jackets, sweaters, blankets, scarves, and gloves that are in good, wearable condition. We encourage clean and gently used items to ensure dignity for recipients.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-primary/25">
                        <input type="checkbox" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">How can I schedule a donation pickup?</div>
                        <div className="collapse-content">
                            <p>During the donation process on our platform, you can select the pickup option and provide your address. A volunteer will contact you to confirm the pickup schedule.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-primary/25">
                        <input type="checkbox" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">Where are the donations distributed?</div>
                        <div className="collapse-content">
                            <p>Donations are distributed across Bangladesh, prioritizing rural and low-income areas. Supported divisions include Dhaka, Chittagong, Sylhet, and others. We ensure donations reach those who need them most.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-primary/25">
                        <input type="checkbox" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">How do I volunteer with WinterAid?</div>
                        <div className="collapse-content">
                            <p>You can sign up as a volunteer on our website. Once registered, you will receive updates about upcoming donation drives and opportunities to participate in distribution activities.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-primary/25">
                        <input type="checkbox" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">Is there a deadline for donations?</div>
                        <div className="collapse-content">
                            <p>Each donation campaign has specific deadlines, which are displayed on the campaign page. Please make your donations within the timeframe to ensure timely distribution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;