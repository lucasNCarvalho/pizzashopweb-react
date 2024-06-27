import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './DayOrdersAmountCard'
import { MonthCanceledOrdersAmountCard } from './MonthCanceledOrdersAmountCard'
import { MonthOrdersAmountCard } from './MonthOrdersAmountCard'
import { MonthRevenueCard } from './MonthRevenueCard'
import { PopularProductsChart } from './PopularProductsChart'
import { ReveneuChart } from './RevenueChart'

export function DashBoard() {
  return (
    <>
      <Helmet title="dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrderAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid-col-9 grid gap-4">
          <ReveneuChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
