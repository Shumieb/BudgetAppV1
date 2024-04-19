import CreditAccCard from "../CreditAccCard/CreditAccCard"
import DebitAccCard from "../DebitAccCard/DebitAccCard"
import InvestAccCard from "../InvestAccCard/InvestAccCard"
import SavingsAccCard from "../SavingsAccCard/SavingsAccCard"

function Home() {
    return (
        <main>
            <section>
                <div>
                    <input type="button" value="Add Account" />
                </div>
                <div>
                    <h3>All Accounts</h3>
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

            </section>
        </main>
    )
}

export default Home