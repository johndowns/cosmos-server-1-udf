function getCustomerId(document: OrderDocument): string {
    // try to get the customer ID from the new format first
    if (document.customer != undefined && document.customer.id != undefined) {
        return document.customer.id;
    }

    // if that didn't work, try to get the customer ID from the old format
    if (document.customerId != undefined) {
        return document.customerId;
    }

    // if neither are present, that is an error
    throw new Error("Document with id " + document.id + " does not contain customer ID in recognised format.");
}

interface OrderDocument {
    id: string,
    customerId: string,
    customer: {
        id: string
    }
}
