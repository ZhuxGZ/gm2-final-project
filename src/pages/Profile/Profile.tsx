import './Profile.css'
import { Table } from '../../components/Table';
export interface Welcome {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: Date;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
}
export interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}
export interface Coordinates {
    lat: number;
    lng: number;
}
export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
export interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
}
export interface Hair {
    color: string;
    type: string;
}

export const Profile = () => {
    return (
        <>
            <div className='Card' >
                <div className='contentCard'>
                    <div className="post main">
                        <div className="preview">
                            <img className='img-profile' src="https://robohash.org/hicveldicta.png" alt="" />
                        </div>
                        <div className="details-profile">
                            <h2>Username</h2>
                            <h2>Age</h2>
                            <h2>email</h2>
                            <h2>phone number</h2>
                            <h2>direction</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Table />
            </div>
        </>

    )
}