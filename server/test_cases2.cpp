#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "calculateAverage.h" // Include only the calculateAverage function

TEST_CASE("Calculate Average Tests") {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    // Call the function to calculate the average
    double average = calculateAverage(arr, size);

    // Test the result
    SECTION("Test Average Calculation") {
        REQUIRE(average == 3); // Assuming the average of {1, 2, 3, 4, 5} is 3
    }
}
