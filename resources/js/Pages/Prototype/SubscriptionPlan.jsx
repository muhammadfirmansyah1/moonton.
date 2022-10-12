import Authenticated from "@/Layouts/Authenticated/index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan()
{
    return <Authenticated>
                <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">

                <SubscriptionCard name="Basic" price={29000} durationInMonth={3} features={["Featured1", "Featured1"]}/>

                <SubscriptionCard 
                isPremium name="Premium" 
                price={29000} 
                durationInMonth={3} 
                features={["Halo", "Hola"]}/>

                </div>
            </div>
    </Authenticated>

}