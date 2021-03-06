/* eslint-disable no-console */

export const state = () => ({
  pendingEarnings: 0,
  paidEarnings: 0,
  totalEarnings: 0,
  jobsPending: 0,
  jobsCompleted: 0,
  jobsTotal: 0
})

export const getters = {
  freelancers(state, getters, rootState) {
    return rootState.auth.users.filter((user) => user.userType === 'freelancer')
  },
  getFreelancerByPublicKey: (state, getters) => (publicKey) => {
    return getters.freelancers.filter(
      (freelancer) => freelancer.public_key === publicKey
    )
  }
}
export const mutations = {
  SET_PENDING_EARNINGS(state, data) {
    state.pendingEarnings = data
  },
  SET_PAID_EARNINGS(state, data) {
    state.paidEarnings = data
  },
  SET_TOTAL_EARNINGS(state, data) {
    state.totalEarnings = data
  },
  SET_JOBS_PENDING(state, data) {
    state.jobsPending = data
  },
  SET_JOBS_COMPLETED(state, data) {
    state.jobsCompleted = data
  },
  SET_JOBS_TOTAL(state, data) {
    state.jobsTotal = data
  }
}

export const actions = {
  getPendingEarnings(context, publicKey) {
    const key = `${publicKey}_PendingEarnings`
    return this.$axios
      .$get(
        `${context.rootState.wavesBaseURL}${context.rootState.dAppAddress}/${key}`
      )
      .then((data) => {
        context.commit('SET_PENDING_EARNINGS', data.value)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getPaidEarnings(context, publicKey) {
    const key = `${publicKey}_PaidEarnings`
    return this.$axios
      .$get(
        `${context.rootState.wavesBaseURL}${context.rootState.dAppAddress}/${key}`
      )
      .then((data) => {
        context.commit('SET_PAID_EARNINGS', data.value)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getTotalEarnings(context, publicKey) {
    const key = `${publicKey}_TotalEarnings`
    return this.$axios
      .$get(
        `${context.rootState.wavesBaseURL}${context.rootState.dAppAddress}/${key}`
      )
      .then((data) => {
        context.commit('SET_TOTAL_EARNINGS', data.value)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getPendingJobs(context, publicKey) {
    const key = `${publicKey}_JobsPending`
    return this.$axios
      .$get(
        `${context.rootState.wavesBaseURL}${context.rootState.dAppAddress}/${key}`
      )
      .then((data) => {
        context.commit('SET_JOBS_PENDING', data.value)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getCompletedJobs(context, publicKey) {
    const key = `${publicKey}_JobsCompleted`
    return this.$axios
      .$get(
        `${context.rootState.wavesBaseURL}${context.rootState.dAppAddress}/${key}`
      )
      .then((data) => {
        context.commit('SET_JOBS_COMPLETED', data.value)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getTotalJobs(context, publicKey) {
    const key = `${publicKey}_JobsTotal`
    return this.$axios
      .$get(
        `${context.rootState.wavesBaseURL}${context.rootState.dAppAddress}/${key}`
      )
      .then((data) => {
        context.commit('SET_JOBS_TOTAL', data.value)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
