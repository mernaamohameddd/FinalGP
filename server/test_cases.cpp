#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "binarySearch.h" // Include only the binary search function

TEST_CASE("Binary Search Tests") {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(arr[0]);

    SECTION("Target found in array") {
        REQUIRE(binarySearch(arr, size, 5) == 4);
        REQUIRE(binarySearch(arr, size, 1) == 0);
        REQUIRE(binarySearch(arr, size, 10) == 9);
    }

    SECTION("Target not found in array") {
        REQUIRE(binarySearch(arr, size, -1) == -1);
        REQUIRE(binarySearch(arr, size, 11) == -1);
    }

    SECTION("Empty array") {
        int emptyArr[10] = {};
        REQUIRE(binarySearch(emptyArr, 0, 1) == -1);
    }
}
