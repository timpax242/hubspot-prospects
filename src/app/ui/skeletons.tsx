export function ProspectsTableRowSkeleton() {
  return (
    <tr className="group">
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}

export function ProspectsMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div>
            <div className="h-6 w-24 rounded bg-gray-100"></div>
            <div className="mt-2 h-6 w-16 rounded bg-gray-100"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function ProspectsTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <ProspectsMobileSkeleton />
            <ProspectsMobileSkeleton />
            <ProspectsMobileSkeleton />
            <ProspectsMobileSkeleton />
            <ProspectsMobileSkeleton />
            <ProspectsMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
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
            <tbody className="bg-white">
              <ProspectsTableRowSkeleton />
              <ProspectsTableRowSkeleton />
              <ProspectsTableRowSkeleton />
              <ProspectsTableRowSkeleton />
              <ProspectsTableRowSkeleton />
              <ProspectsTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
