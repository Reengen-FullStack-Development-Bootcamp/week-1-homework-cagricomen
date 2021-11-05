import Home from '@/components/Home'
import Hotel from '@/components/Hotel'
import View from '@/components/View'
import Reservation from '@/components/Reservation'
import Payment from '@/components/Payment'

export  const routes = [
    {
        name: 'home',
        path: '/home',
        display: 'Home',
        component: Home,
        hidden: true
    },
    {
        name: 'hotel',
        path: '/hotel',
        display: 'Hotel',
        component: Hotel,
    },
    {
        name: 'hotel-view',
        path: '/hotel/view/:id',
        display: 'View',
        component: View,
        hidden: true
    },
    {
        name: 'hotel-reservation',
        path: '/hotel/view/:id/reservation',
        display: 'Reservation',
        component: Reservation,
        hidden: true
    },
    {
        name: 'hotel-payment',
        path: '/hotel/view/reservation/payment',
        display: 'Payment',
        component: Payment,
        hidden: true
    }
  ];