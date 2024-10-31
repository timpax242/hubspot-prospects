import { CustomersTableType } from '@/app/lib/definitions';

const PRIVATE_APP_ACCESS = process.env.ACCESS_TOKEN;

export async function getCustomers() {

  const hubapi = 'https://api.hubapi.com/crm/v3/objects/prospects?properties=company,contact_name,contact_phone,contact_email,sender_email';
  const headers = {
    Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
    'Content-Type': 'application/json'
  }

  try {
    const res = await fetch(hubapi, {
      headers,
      next: { revalidate: 60 }
    })

    if (res.ok) {
      console.log('Promise resolved and HTTP status is successful');
      const resp = await res.json();
      //await new Promise((resolve) => setTimeout(resolve, 2000));
      return <CustomersTableType>resp.results;

    } else {
      console.error('Promise resolved but HTTP status failed');
    }
  } catch {
    console.error('Promise rejected');
  }
}