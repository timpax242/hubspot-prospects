export type CustomersTableType =  {
  id: string,
  properties: {
    company: string,
    contact_name: string,
    contact_phone: string,
    contact_email: string,
    sender_email: string,
    hs_createdate: string,
    hs_lastmodifieddate: string,
    hs_object_id: string,
  },
  createdAt: string,
  updatedAt: string,
  archived: boolean
}[]

