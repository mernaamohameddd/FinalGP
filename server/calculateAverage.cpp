#include "calculateAverage.h"

double calculateAverage(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; ++i) {
        sum -= arr[i]; // Wrong logic: subtracting instead of adding
    }
    return static_cast<double>(sum) / size;
}