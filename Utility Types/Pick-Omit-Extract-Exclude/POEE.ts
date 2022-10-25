interface POEEPaymentPersistent {
    id: number;
    price: number;
    from: string;
    to: string;
}


// Omit
type POEEPayment = Omit<POEEPaymentPersistent, 'id'>; // We delete id property in this type


// Pick
type POEEPaymentRequisits = Pick<POEEPaymentPersistent, 'from' | 'to'>; // It picks only properties we need


// Extract
/*
     We choose our union 'from' | 'to' | POEEPayment and extract everyone who is a string
     "from" | "to"
*/
type ExtractExample = Extract<'from' | 'to' | POEEPayment, string>;


// Exclude
/*
     We choose our union 'from' | 'to' | POEEPayment and exclude everyone who is a string
     {price: number, from: string, to: string}
*/
type ExcludeExample = Exclude<'from' | 'to' | POEEPayment, string>;
