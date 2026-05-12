'use client'

import servicesData from '@/content/services.json'

export function ComparisonTable() {
  const comparison = servicesData.comparison
  const services = servicesData.services

  return (
    <section className="py-14 border-b border-border">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {comparison.title}
        </h2>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Fitur
              </th>
              {services.map((service, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-semibold text-foreground"
                >
                  <div className="font-bold text-primary">{service.badge}</div>
                  <div className="text-xs text-muted-foreground font-normal mt-1">
                    {service.title}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.table.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3 font-semibold text-foreground">
                  {row.feature}
                </td>
                <td className="px-4 py-3 text-muted-foreground text-sm">
                  {row.service1}
                </td>
                <td className="px-4 py-3 text-muted-foreground text-sm">
                  {row.service2}
                </td>
                <td className="px-4 py-3 text-muted-foreground text-sm">
                  {row.service3}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

