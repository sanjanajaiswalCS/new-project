#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

typedef struct {
    int taskId;
    int entryTime;
    int executionTime;
    int timeLeft;
    int finishTime;
    int totalTime;
    int idleTime;
    int schedulerLevel; 
} Task;


typedef struct ListNode {
    Task *task;
    struct ListNode *link;
} ListNode;

typedef struct {
    ListNode *head;
    ListNode *tail;
} TaskList;

TaskList* initializeTaskList();
bool isListEmpty(TaskList *list);
void addTask(TaskList *list, Task *t);
Task* removeTask(TaskList *list);
void implementMLFQScheduler(Task taskSet[], int taskCount, int quantum1, int quantum2);
void displayTaskStatistics(Task taskSet[], int taskCount);
void checkArrivingTasks(Task taskSet[], int taskCount, TaskList *list, int currentClock);

TaskList* initializeTaskList() {
    TaskList *list = (TaskList*)malloc(sizeof(TaskList));
    if (!list) {
        printf("Failed to allocate memory for task list\n");
        exit(1);
    }
    list->head = list->tail = NULL;
    return list;
}
bool isListEmpty(TaskList *list) {
    return (list->head == NULL);
}
void addTask(TaskList *list, Task *t) {
    ListNode *newNode = (ListNode*)malloc(sizeof(ListNode));
    if (!newNode) {
        printf("Failed to allocate memory for list node\n");
        exit(1);
    }
    newNode->task = t;
    newNode->link = NULL;
    
    if (isListEmpty(list)) {
        list->head = list->tail = newNode;
    } else {
        list->tail->link = newNode;
        list->tail = newNode;
    }
}

Task* removeTask(TaskList *list) {
    if (isListEmpty(list)) return NULL;
    
    ListNode *tempNode = list->head;
    Task *t = tempNode->task;
    
    list->head = list->head->link;
    
    if (list->head == NULL) {
        list->tail = NULL;
    }
    
    free(tempNode);
    return t;
}

void checkArrivingTasks(Task taskSet[], int taskCount, TaskList *list, int currentClock) {
    for (int i = 0; i < taskCount; i++) {
        if (taskSet[i].entryTime <= currentClock && 
            taskSet[i].timeLeft > 0 && 
            taskSet[i].schedulerLevel == 0) {
            taskSet[i].schedulerLevel = 1;
            addTask(list, &taskSet[i]);
        }
    }
}
void implementMLFQScheduler(Task taskSet[], int taskCount, int quantum1, int quantum2) {
  
    TaskList *level1 = initializeTaskList();  
    TaskList *level2 = initializeTaskList();  
    TaskList *level3 = initializeTaskList();  
    
    int clockTicks = 0;
    int finishedTasks = 0;
    
    for (int i = 0; i < taskCount; i++) {
        taskSet[i].timeLeft = taskSet[i].executionTime;
        taskSet[i].schedulerLevel = 0;  
    }
    checkArrivingTasks(taskSet, taskCount, level1, clockTicks);
    
    while (finishedTasks < taskCount) {
        Task *currentTask = NULL;
        
        checkArrivingTasks(taskSet, taskCount, level1, clockTicks);
        
        if (!isListEmpty(level1)) {
            currentTask = removeTask(level1);
            int runtime = (currentTask->timeLeft < quantum1) ? 
                           currentTask->timeLeft : quantum1;
            
            clockTicks += runtime;
            currentTask->timeLeft -= runtime;
            
            checkArrivingTasks(taskSet, taskCount, level1, clockTicks);
            
            if (currentTask->timeLeft == 0) {
                
                finishedTasks++;
                currentTask->finishTime = clockTicks;
                currentTask->totalTime = currentTask->finishTime - currentTask->entryTime;
                currentTask->idleTime = currentTask->totalTime - currentTask->executionTime;
            } else {
                currentTask->schedulerLevel = 2;
                addTask(level2, currentTask);
            }
        } else if (!isListEmpty(level2)) {
            
            currentTask = removeTask(level2);
            int runtime = (currentTask->timeLeft < quantum2) ? 
                           currentTask->timeLeft : quantum2;
            
            clockTicks += runtime;
            currentTask->timeLeft -= runtime;
        
            checkArrivingTasks(taskSet, taskCount, level1, clockTicks);
            
            if (currentTask->timeLeft == 0) {
              
                finishedTasks++;
                currentTask->finishTime = clockTicks;
                currentTask->totalTime = currentTask->finishTime - currentTask->entryTime;
                currentTask->idleTime = currentTask->totalTime - currentTask->executionTime;
            } else {
               
                currentTask->schedulerLevel = 3;
                addTask(level3, currentTask);
            }
        } else if (!isListEmpty(level3)) {
            
            currentTask = removeTask(level3);
            int runtime = currentTask->timeLeft; 
            
            clockTicks += runtime;
            currentTask->timeLeft = 0;
            
            finishedTasks++;
            currentTask->finishTime = clockTicks;
            currentTask->totalTime = currentTask->finishTime - currentTask->entryTime;
            currentTask->idleTime = currentTask->totalTime - currentTask->executionTime;
            
            checkArrivingTasks(taskSet, taskCount, level1, clockTicks);
        } else {
           
            int nextArrival = INT_MAX;
            for (int i = 0; i < taskCount; i++) {
                if (taskSet[i].entryTime > clockTicks && 
                    taskSet[i].timeLeft > 0 && 
                    taskSet[i].entryTime < nextArrival) {
                    nextArrival = taskSet[i].entryTime;
                }
            }
            
            if (nextArrival != INT_MAX) {
                clockTicks = nextArrival;
                checkArrivingTasks(taskSet, taskCount, level1, clockTicks);
            } else {
               
                printf("Error: Scheduler deadlock detected - no tasks to process but not all completed.\n");
                break;
            }
        }
    }
    
    free(level1);
    free(level2);
    free(level3);
}

void displayTaskStatistics(Task taskSet[], int taskCount) {
    printf("\nTask\tEntry\tExec\tFinish\tTotal\tIdle\n");
    printf("---------------------------------------------------\n");
    
    float avgTotalTime = 0, avgIdleTime = 0;
    
    for (int i = 0; i < taskCount; i++) {
        printf("%d\t%d\t%d\t%d\t%d\t%d\n", 
               taskSet[i].taskId,
               taskSet[i].entryTime,
               taskSet[i].executionTime,
               taskSet[i].finishTime,
               taskSet[i].totalTime,
               taskSet[i].idleTime);
               
        avgTotalTime += taskSet[i].totalTime;
        avgIdleTime += taskSet[i].idleTime;
    }
    
    avgTotalTime /= taskCount;
    avgIdleTime /= taskCount;
    
    printf("\nAverage Total Processing Time: %.2f", avgTotalTime);
    printf("\nAverage Idle Time: %.2f\n", avgIdleTime);
}

int main() {
    int taskCount, quantum1, quantum2;
    
    printf("Enter the number of tasks to schedule: ");
    scanf("%d", &taskCount);
    
    printf("Enter time slice for Level 1 scheduler: ");
    scanf("%d", &quantum1);
    
    printf("Enter time slice for Level 2 scheduler: ");
    scanf("%d", &quantum2);
    
    Task *taskSet = (Task*)malloc(taskCount * sizeof(Task));
    if (!taskSet) {
        printf("Memory allocation failed for task set\n");
        return 1;
    }
    
    printf("\nEnter task details:\n");
    for (int i = 0; i < taskCount; i++) {
        taskSet[i].taskId = i + 1;
        
        scanf("%d", &taskSet[i].entryTime);
        
        scanf("%d", &taskSet[i].executionTime);
        
        printf("\n");
    }
    
    implementMLFQScheduler(taskSet, taskCount, quantum1, quantum2);
    displayTaskStatistics(taskSet, taskCount);
    
    free(taskSet);
    return 0;
}