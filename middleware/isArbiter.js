export default function({ store, redirect }) {
  // If the user is not a client
  if (!store.getters['disputes/isArbiter']) {
    store.$toast.info('Only Auctionlance ambassadors can see this page')
    return redirect('/auctoboard/overview')
  }
}
