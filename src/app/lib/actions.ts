'use server'

import { CustomersTableType } from '@/app/lib/definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function createCustomer(
  currentState: string,
  formData: FormData
) {

  console.log(formData);

  const hubapi = 'https://api.hubapi.com/crm/v3/objects/prospects';
  const headers = {
    Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
    'Content-Type': 'application/json'
  };
  const update = {
    properties: {
      "company": formData.get('company'),
      "contact_name": formData.get('contact_name'),
      "contact_phone": formData.get('contact_phone'),
      "contact_email": formData.get('contact_email'),
      "sender_email": formData.get('sender_email')
    }
  }
  let success = false;

  try {
    const res = await fetch(hubapi, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(update)
    })
    const resp = await res.json();
    //console.log(resp);

    if (resp.status != 'error') {
      success = true;
    } else {
      return 'Missing Fields. Failed to create a new prospect.';
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (success) {
      revalidatePath('/prospects');
      redirect('/prospects')
    }
  }

  return "";
}