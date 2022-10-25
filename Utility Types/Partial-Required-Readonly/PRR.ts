interface PRRUser {
    name: string;
    age?: number;
    email: string;
}


// Partial<T>
type partial = Partial<PRRUser>; // Partial makes all properties optional
const p: partial = {}; // is valid


// Required<T>
type required = Required<PRRUser>; // Partial makes all properties required
const r: required = {
    name: 'Johan',
    age: 20,
    email: 'mail@gmail.com',
}; // is valid


// Readonly<T>
type readonly = Readonly<PRRUser>;


// mix of required and readonly
type requiredAndReadonly = Required<Readonly<PRRUser>>; //  All properties required and readonly
