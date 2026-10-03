export const TECHNICAL_NOTES = [
  {
    id: "tech-os",
    subject: "Operating Systems",
    icon: "Cpu",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    topics: [
      {
        title: "Process vs Thread",
        summary: "A process is an execution instance of a program with isolated memory space (Text, Data, Heap, Stack). A thread is a lightweight execution unit within a process sharing code, data, and OS resources but possessing its own register set and stack.",
        keyPoints: [
          "Context switching between processes is slower due to MMU page table updates.",
          "Thread context switching is fast because memory mapping stays unchanged.",
          "Process crash does not affect other processes; thread failure can crash entire process."
        ],
        codeSnippet: `// Thread creation in C using pthreads
#include <pthread.h>
#include <stdio.h>

void* worker(void* arg) {
    printf("Thread running concurrently\\n");
    return NULL;
}

int main() {
    pthread_t thread_id;
    pthread_create(&thread_id, NULL, worker, NULL);
    pthread_join(thread_id, NULL);
    return 0;
}`
      },
      {
        title: "Deadlock & Coffman Conditions",
        summary: "A state where a set of processes are blocked because each process holds a resource and waits for another resource held by another process.",
        keyPoints: [
          "Mutual Exclusion: Resource cannot be shared.",
          "Hold and Wait: Process holds resources while waiting for others.",
          "No Preemption: Resources cannot be forcibly taken away.",
          "Circular Wait: A closed chain of processes waiting for each other.",
          "Prevention: Break at least 1 Coffman condition or use Banker's Algorithm."
        ],
        codeSnippet: `// Banker's Algorithm Safety Check condition:
// Work = Available
// Finish[i] = false for all i
// Need[i][j] <= Work[j] => Process i can finish safely.`
      }
    ]
  },
  {
    id: "tech-dbms",
    subject: "Database Management Systems (DBMS)",
    icon: "Database",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    topics: [
      {
        title: "ACID Properties & Isolation Levels",
        summary: "ACID guarantees transactional reliability in relational databases.",
        keyPoints: [
          "Atomicity: 'All or Nothing' execution via Undo/Redo Logs.",
          "Consistency: Database transitions from one valid state to another.",
          "Isolation: Concurrent transactions don't interfere (Read Uncommitted < Read Committed < Repeatable Read < Serializable).",
          "Durability: Committed data persists even across system crashes (WAL - Write-Ahead Logging)."
        ],
        codeSnippet: `-- Transaction with Isolation Level setting
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 500 WHERE id = 101;
  UPDATE accounts SET balance = balance + 500 WHERE id = 102;
COMMIT;`
      },
      {
        title: "Database Normalization (1NF to BCNF)",
        summary: "Process of organizing fields and tables to minimize redundancy and dependency anomalies (Insert, Update, Delete).",
        keyPoints: [
          "1NF: Atomic values only, no repeating groups.",
          "2NF: In 1NF + No partial dependency (non-prime attributes depend fully on entire candidate key).",
          "3NF: In 2NF + No transitive dependency (non-prime attribute depends on another non-prime).",
          "BCNF: In 3NF + For every X -> Y functional dependency, X must be a super key."
        ]
      }
    ]
  },
  {
    id: "tech-cn",
    subject: "Computer Networks (CN)",
    icon: "Wifi",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    topics: [
      {
        title: "OSI 7-Layer Model vs TCP/IP Model",
        summary: "Standard framework for understanding how data flows across physical network interfaces to application software.",
        keyPoints: [
          "Layer 7 - Application (HTTP, DNS, FTP, SMTP)",
          "Layer 6 - Presentation (Encryption TLS, Data compression)",
          "Layer 5 - Session (Session establishment & sockets)",
          "Layer 4 - Transport (TCP segment, UDP datagram, Ports)",
          "Layer 3 - Network (IP address, Routers, ICMP)",
          "Layer 2 - Data Link (MAC address, Switches, Frames)",
          "Layer 1 - Physical (Bits, Cables, Hubs)"
        ],
        codeSnippet: `TCP 3-Way Handshake:
1. Client  --- SYN (Seq=x) ------------> Server
2. Client  <-- SYN-ACK (Seq=y, Ack=x+1) - Server
3. Client  --- ACK (Ack=y+1) -----------> Server`
      },
      {
        title: "HTTP vs HTTPS & SSL/TLS Handshake",
        summary: "HTTPS layers HTTP traffic over TLS/SSL encryption using public key cryptography (RSA / ECC) and symmetric session keys.",
        keyPoints: [
          "HTTP runs on Port 80 (Plain text).",
          "HTTPS runs on Port 443 (Encrypted).",
          "TLS handshake authenticates server certificate via CA and negotiates AES symmetric key for speed."
        ]
      }
    ]
  },
  {
    id: "tech-sd",
    subject: "System Design",
    icon: "Server",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    topics: [
      {
        title: "CAP Theorem & PACELC Theorem",
        summary: "In distributed data stores, CAP theorem states you can only choose 2 out of 3 guarantees: Consistency, Availability, Partition Tolerance.",
        keyPoints: [
          "CP Systems (e.g. HBase, MongoDB, Redis): Sacrifices availability during network partition to keep data consistent.",
          "AP Systems (e.g. Cassandra, DynamoDB): Sacrifices strict consistency for high availability with eventual consistency.",
          "PACELC extension: IF Partition (P), choose Availability (A) or Consistency (C); ELSE (E), choose Latency (L) or Consistency (C)."
        ]
      },
      {
        title: "Caching Strategies & Eviction Policies",
        summary: "Caching keeps hot data in fast memory (RAM) to dramatically decrease read latency and database stress.",
        keyPoints: [
          "Cache-Aside: App reads from cache; if miss, reads DB and populates cache.",
          "Write-Through: App writes to cache, cache synchronously writes to DB.",
          "Write-Back (Write-Behind): App writes to cache, cache asynchronously flushes to DB.",
          "Eviction Policies: LRU (Least Recently Used), LFU (Least Frequently Used), FIFO."
        ]
      }
    ]
  },
  {
    id: "tech-oops",
    subject: "Object Oriented Programming (OOPs)",
    icon: "Code",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    topics: [
      {
        title: "4 Pillars of OOPs & SOLID Principles",
        summary: "The foundational paradigms for structuring extensible and maintainable software.",
        keyPoints: [
          "Encapsulation: Bundling data and methods into a single class with restricted access (private/public).",
          "Abstraction: Hiding implementation details and showing only essential features (Interfaces/Abstract classes).",
          "Inheritance: Mechanism where child class acquires properties of parent class.",
          "Polymorphism: Single interface acting in multiple forms (Compile-time Method Overloading vs Runtime Method Overriding).",
          "SOLID: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
        ],
        codeSnippet: `// Polymorphism Example in C++
class Animal {
public:
    virtual void makeSound() { cout << "Generic sound\\n"; }
};

class Dog : public Animal {
public:
    void makeSound() override { cout << "Woof! Woof!\\n"; }
};`
      }
    ]
  }
];
