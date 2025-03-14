import cheflogo from "/src/chef.png";

export default function Header() {
    return (
        <header>
            <img src={cheflogo} alt=""/>
            <h1>Chef Claude</h1>
        </header>
    )
}