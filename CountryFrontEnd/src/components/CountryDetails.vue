<template>
  <div v-show="this.$store.state.countryCode" class="w-auto p-3 mb-5 border rounded-lg border-slate-500">
    <h1 class="text-lg text-orange-500">Country details</h1>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-4 sm:px-6 lg:px-8">
            <div class="overflow-hidden rounded-lg">
                <table class="min-w-full text-center table-auto">
                    <thead class="bg-orange-500 border-b">
                        <tr class="rounded-md">
                            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
                                Country
                            </th>
                            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
                                Code
                            </th>
                            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
                                Region
                            </th>
                            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
                                Capital
                            </th>
                            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
                                Longitude
                            </th>
                            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
                                Latitude
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b">
                            <td class="px-1 py-4 text-sm font-medium text-slate-900 whitespace-nowrap">
                                {{ this.$store.state.country.Name }}
                            </td>
                            <td class="px-1 py-4 text-sm font-light text-slate-900 whitespace-nowrap">
                                {{ this.$store.state.country.CountryCode }}
                            </td>
                            <td class="px-1 py-4 text-sm font-light text-slate-900 whitespace-nowrap">
                                {{ this.$store.state.country.Region }}
                            </td>
                            <td class="px-1 py-4 text-sm font-light text-slate-900 whitespace-nowrap">
                                {{ this.$store.state.country.CapitalCity }}
                            </td>
                            <td class="px-1 py-4 text-sm font-light text-slate-900 whitespace-nowrap">
                                {{ this.$store.state.country.Longitude }}
                            </td>
                            <td class="px-1 py-4 text-sm font-light text-slate-900 whitespace-nowrap">
                                {{ this.$store.state.country.Latitude }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        countryCode: '',
      }
    },
  }
</script>