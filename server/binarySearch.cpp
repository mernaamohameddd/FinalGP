#include "binarySearch.h"

int binarySearch(const int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;  // Found the target at index mid
        }
        else if (arr[mid] < target) {
            left = mid + 1;  // Target is in the right half
        }
        else {
            right = mid - 1;  // Target is in the left half
        }
    }

    return -1;  // Target not found in the array
}