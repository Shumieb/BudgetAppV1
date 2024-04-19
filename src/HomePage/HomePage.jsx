import AccTypeToAddModal from "../AccTypeToAddModal/AccTypeToAddModal"
import AllAccCard from "../AllAccCard/AllAccCard"
import AllAccPage from "../AllAccPage/AllAccPage"
import CreditAccCard from "../CreditAccCard/CreditAccCard"
import CreditAccPage from "../CreditAccPage/CreditAccPage"
import DebitAccCard from "../DebitAccCard/DebitAccCard"
import DebitAccPage from "../DebitAccPage/DebitAccPage"
import InvestAccCard from "../InvestAccCard/InvestAccCard"
import InvestAccPage from "../InvestAccPage/InvestAccPage"
import SavingsAccCard from "../SavingsAccCard/SavingsAccCard"
import SavingsAccPage from "../SavingsAccPage/SavingsAccPage"

function Home() {
    return (
        <main>
            <section>
                <div>
                    <input type="button" value="Add Account" />
                </div>
                <div>
                    <AllAccCard />
                </div>
                <div>
                    <DebitAccCard />
                </div>
                <div>
                    <SavingsAccCard />
                </div>
                <div>
                    <CreditAccCard />
                </div>
                <div>
                    <InvestAccCard />
                </div>
            </section>

            <section>
                <AllAccPage />
                <DebitAccPage />
                <SavingsAccPage />
                <CreditAccPage />
                <InvestAccPage />
            </section>

            <div>
                <AccTypeToAddModal />
            </div>
        </main>
    )
}

export default Home