#include <stdio.h>
#include <stdlib.h>
void scheduleRoundRobin(int pids[], int arrival[], int burst[], int n, int quantum, int completion[], int turnaround[], int waiting[]) {
    int remaining[n];
    int started[n];
    int queue[100];
    int front = 0, rear = 0;
    int completed = 0;
    int current_time = 0;

    for (int i = 0; i < n; i++) {
        remaining[i] = burst[i];
        started[i] = 0;
    }
    for (int i = 0; i < n; i++) {
        if (arrival[i] == 0) {
            queue[rear] = i;
            rear++;
            started[i] = 1;
        }
    }
    while (completed < n) {
        if (front == rear) {
            int next_arrival = -1;
            int min_arrival_time = 1000000;

            for (int i = 0; i < n; i++) {
                if (!started[i] && arrival[i] < min_arrival_time) {
                    min_arrival_time = arrival[i];
                    next_arrival = i;
                }
            }

            if (next_arrival != -1) {
                current_time = arrival[next_arrival];
                queue[rear] = next_arrival;
                rear++;
                started[next_arrival] = 1;
            }
            continue;
        }
        int idx = queue[front];
        front++;

        int execute_time = (remaining[idx] < quantum) ? remaining[idx] : quantum;
        remaining[idx] -= execute_time;
        current_time += execute_time;

        for (int i = 0; i < n; i++) {
            if (!started[i] && arrival[i] <= current_time) {
                queue[rear] = i;
                rear++;
                started[i] = 1;
            }
        }

        if (remaining[idx] > 0) {
            queue[rear] = idx;
            rear++;
        } else {
            
            completed++;
            completion[idx] = current_time;
            turnaround[idx] = completion[idx] - arrival[idx];
            waiting[idx] = turnaround[idx] - burst[idx];
        }
    }
}
int main ()
{
    int taskCount, quantum;      
printf("Enter the number of processes: ");
scanf("%d", &taskCount);

int pids[taskCount], arrival[taskCount], burst[taskCount], completion[taskCount], turnaround[taskCount], waiting[taskCount];

printf("Enter arrival time and burst time for each process:\n");
for (int i = 0; i < taskCount; i++) {
    pids[i] = i;
    scanf("%d %d", &arrival[i], &burst[i]);
}
printf("Enter time quantum: ");
scanf("%d", &quantum);
scheduleRoundRobin(pids, arrival, burst, taskCount, quantum, completion, turnaround, waiting);

printf("\nPID\tArrival\tBurst\tCompletion\tTurnaround\tWaiting\n");
float avg_turnaround = 0, avg_waiting = 0;

for (int i = 0; i < taskCount; i++) {
    printf("%d\t%d\t%d\t%d\t\t%d\t\t%d\n",
            pids[i],
            arrival[i],
            burst[i],
            completion[i],
            turnaround[i],
            waiting[i]);
    
    avg_turnaround += turnaround[i];
    avg_waiting += waiting[i];
}

avg_turnaround /= taskCount;
avg_waiting /= taskCount;

printf("\nAverage Turnaround Time: %.2f\n", avg_turnaround);
printf("Average Waiting Time: %.2f\n", avg_waiting);

return 0;
}