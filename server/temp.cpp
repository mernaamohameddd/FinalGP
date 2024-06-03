/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

#include <iostream>

// Function to implement binary search
int binarySearch(const int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;  // Found the target at index mid
        }
        else if (arr[mid] < target
            left = mid + 1;  // Target is in the right half
        }
        else {
            right = mid - 1;  // Target is in the left half
        }
    }

    return -1;  // Target not found in the array
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 5;

    int result = binarySearch(arr, size, target);

    if (result != -1) {
        std::cout << "Target " << target << " found at index " << result << "." << std::endl;
    } else {
        std::cout << "Target " << target << " not found in the array." << std::endl;
    }

    return 0;
}

