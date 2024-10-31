import { getCustomers } from '@/app/lib/actions';

export default async function CustomersTable() {

  const customers = await getCustomers();

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">

              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{customer.properties.company}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.properties.contact_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {customer.properties.contact_phone}
                        </p>
                        <p className="text-sm text-gray-500">
                          {customer.properties.contact_email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Sender</p>
                        <p className="text-sm text-gray-500">{customer.properties.sender_email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Company name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Contact person
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Contact person&apos;s phone
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Contact person&apos;s email
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Sender
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers?.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{customer.properties.company}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.properties.contact_name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.properties.contact_phone}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.properties.contact_email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.properties.sender_email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}