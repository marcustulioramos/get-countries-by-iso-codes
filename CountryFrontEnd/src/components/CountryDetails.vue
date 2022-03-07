<template>
  <div class="w-auto p-3 mb-5 border rounded-lg border-slate-400" data-cy="countryDetails">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-lg font-bold leading-none text-orange-500 dark:text-orange-500" data-cy="countryDetails">Country details</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"></a>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-2 sm:py-2">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">Country: <span class="text-orange-500" data-cy="Name">{{ this.$store.state.country.Name }}</span></p>
                    </div>
                </div>
            </li>
            <li class="py-2 sm:py-2">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">Code: <span class="text-orange-500" data-cy="CountryCode">{{ this.$store.state.country.CountryCode }}</span></p>
                    </div>
                </div>
            </li>
            <li class="py-2 sm:py-2">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">Region: <span class="text-orange-500" data-cy="Region">{{ this.$store.state.country.Region }}</span></p>
                    </div>
                </div>
            </li>
            <li class="py-2 sm:py-2">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">Capital City: <span class="text-orange-500" data-cy="CapitalCity">{{ this.$store.state.country.CapitalCity }}</span></p>
                    </div>
                </div>
            </li>
            <li class="py-2 sm:py-2">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">Longitude: <span class="text-orange-500" data-cy="Longitude">{{ this.$store.state.country.Longitude }}</span></p>
                    </div>
                </div>
            </li>
            <li class="py-2 sm:py-2">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">Latitude: <span class="text-orange-500" data-cy="Latitude">{{ this.$store.state.country.Latitude }}</span></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countryCode: "",
    };
  },
};
</script>