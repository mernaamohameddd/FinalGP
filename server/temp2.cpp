#include <iostream>

// Function to calculate the average of an array (with wrong logic)
double calculateAverage(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; ++i) {
        sum -= arr[i]; // Wrong logic: subtracting instead of adding
    }
    return static_cast<double>(sum) / size;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    // Call the function to calculate the average
    double average = calculateAverage(arr, size);
    
    // Display the result
    std::cout << "The average of the array is: " << average << std::endl;
    
    return 0;
}
