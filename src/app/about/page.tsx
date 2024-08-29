import MyGoals from "../page_sections/about/MyGoals";
import OtherInterests from "../page_sections/about/OtherInterests";
import WhoAmI from "../page_sections/about/WhoAmI";

export default function Page() {
    return (
        <main>
           <WhoAmI />
           <MyGoals />
           <OtherInterests />
        </main>
    );
}