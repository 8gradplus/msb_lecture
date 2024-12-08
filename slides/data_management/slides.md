<style>
.small-list {
    font-size: 0.7em;
    list-style: none; /* Remove default list styling */
    counter-reset: section; /* Initialize counter */
}

.small-list li {
    counter-increment: section; /* Increment counter */
    margin-bottom: 0.5em; /* Add spacing between items */
}

.smaller-list {
    font-size: 0.6em;
    list-style: none; /* Remove default list styling */
    counter-reset: section; /* Initialize counter */
}

.smaller-list li {
    counter-increment: section; /* Increment counter */
    margin-bottom: 0.5em; /* Add spacing between items */
}

.small-text {
    font-size: 0.7em;
}

.smaller-text {
    font-size: 0.6em;
}
</style>

Where are we located during the lecture?

<img
  src="../assets/data_management/imgs/imgs.001.png"
  alt="Overview"
  style="
    width: 800px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

---

<span style="color: orange;">Outlook</span>

- The focus / goals of data management
- Data management architectures
- Deep-dive into lyvy's architecture
- Deep-dive into a realtime architecture
- Cloud vs. On-Premise
- Exercise: Design and Critique a Data Management Architecture yourself

---

<span style="color: orange;">The focus / goals of data management</span>

---

<span style="color: orange;">**Data Quality**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Ensure the accuracy, consistency, completeness, and reliability of data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">High-quality data is essential for informed decision-making, reducing errors, and building trust in analytics.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Data cleansing to remove errors or duplicates.</span>
  - <span style="font-size: 0.8em;">Standardizing data formats and enforcing validation rules.</span>
  - <span style="font-size: 0.8em;">Continuous monitoring to detect and address quality issues.</span>

--

<span style="color: orange;">**Data Security**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Protect data from unauthorized access, breaches, and misuse.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Data breaches can lead to financial losses, legal consequences, and reputational damage.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing encryption and secure access controls.</span>
  - <span style="font-size: 0.8em;">Regular security audits and vulnerability assessments.</span>
  - <span style="font-size: 0.8em;">Complying with regulations like GDPR, HIPAA, or CCPA.</span>

--

<span style="color: orange;">**Data Accessibility**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Ensure the right data is available to the right people at the right time.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Enhances productivity and decision-making by providing timely access to relevant data.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing role-based access control (RBAC).</span>
  - <span style="font-size: 0.8em;">Developing intuitive data catalogs and search tools.</span>
  - <span style="font-size: 0.8em;">Minimizing data silos with integrated platforms.</span>

--

<span style="color: orange;">**Data Governance and Compliance**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Establish policies and processes for consistent, compliant, and ethical data usage.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Ensures legal compliance and ethical standards while reducing risk.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Creating data usage policies and training employees.</span>
  - <span style="font-size: 0.8em;">Documenting data lineage to track its origins and transformations.</span>
  - <span style="font-size: 0.8em;">Ensuring audit readiness with proper documentation.</span>

--

<span style="color: orange;">**Scalability**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Build systems and processes that handle growing data volumes and complexity without degradation in performance.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Organizations need to adapt to increasing data demands as they grow.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Using scalable storage and compute solutions (e.g., cloud platforms, distributed databases).</span>
  - <span style="font-size: 0.8em;">Implementing efficient ETL pipelines.</span>
  - <span style="font-size: 0.8em;">Designing data architectures for horizontal scaling.</span>

--

Short excursion:

<span style="color: lightgreen">horizontal vs. vertical scaling, whats the difference?</span>

--

<span style="color: orange;">**Data Integration**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Seamlessly combine data from multiple sources into a unified view.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Allows for comprehensive insights and avoids fragmented decision-making.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Using ETL/ELT tools to consolidate data.</span>
  - <span style="font-size: 0.8em;">Maintaining metadata and master data management practices.</span>
  - <span style="font-size: 0.8em;">Standardizing APIs and protocols for data exchange.</span>

--

<span style="color: orange;">**Data Availability and Continuity**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Minimize downtime and ensure data availability during disruptions.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Business operations rely on uninterrupted access to critical data.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing redundancy and failover systems.</span>
  - <span style="font-size: 0.8em;">Conducting regular backups and testing recovery processes.</span>
  - <span style="font-size: 0.8em;">Using high-availability systems and disaster recovery plans.</span>

--

<span style="color: orange;">**Usability and Data Democratization**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Enable non-technical users to access and understand data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Promotes data-driven decision-making across all levels of an organization.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Providing self-service BI tools.</span>
  - <span style="font-size: 0.8em;">Creating user-friendly dashboards and visualizations.</span>
  - <span style="font-size: 0.8em;">Offering training on data literacy.</span>

--

<span style="color: orange;">**Usability and Data Democratization**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Enable non-technical users to access and understand data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Promotes data-driven decision-making across all levels of an organization.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Providing self-service BI tools.</span>
  - <span style="font-size: 0.8em;">Creating user-friendly dashboards and visualizations.</span>
  - <span style="font-size: 0.8em;">Offering training on data literacy.</span>

--

<span style="color: orange;">Cost Efficiency</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Minimize expenses related to storing, processing, and managing data while maintaining performance and scalability.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Reduces operational costs, supports scalability within budget constraints, and enables businesses to allocate resources more effectively to other critical areas.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="color: lightgreen;">It's your turn! What are cost drivers considering data infrastructures?</span>

--

<span style="color: orange;">Summary: data management provides the foundations for (operational) BI</span>

---

<span style="color: orange;">Data management architectures</span>

---

<span style="color: orange;">Data Warehouse</span>

--

<img
  src="../assets/data_management/imgs/imgs.002.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

<span style="color: orange;">Description</span>

<ol class="small-list">
<li>A Data Warehouse serves as a central hub for storing structured data.</li>
<li>Information is collected from multiple sources, processed / ingested (ETL), and then stored in the Warehouse.</li>
<li>The design of a Data Warehouse resembles a well-structured library, enabling easy data retrieval and analysis.</li>
<li>This organization allows businesses to gain insights quickly, enhancing operational efficiency and decision-making.</li>
<li>Additionally, its structured data foundation supports robust Business Intelligence (BI) analysis.</li>
</ol>

--

<span style="color: orange;">Some Pros</span>

<ol class="small-list">
<li>Transparent ETL processes helps to understand how data is created (e.g. using _dbt_)</li>
<li>Higher security: structured data organization in data marts</li>
<li>Very fast query processing</li>
<ul>
  <li>as only relevant data is saved as data marts the amount of data remains within limits</li>
  <li>typically relational databases are used, which are extremely performant within a certain data size limit</li>
</ul>
</ol>

--

<span style="color: orange;">Some Cons</span>

<ol class="small-list">
<li>as intermediate data tables (like staging tables) are typically not persisted, troubleshooting can be difficult (virtual tables / views vs. physical tables / materialized)</li>
<li>changes in schema can be very expensive (reload external data sources)</li>
<li>loss of data can occur if data on external data sources has a short retention period</li>
<li>explorative data tasks based on raw- and intermediate data (staging) not possible</li>
<li>not suitable for machine learning tasks on unstructured data</li>
</ol>

--

Short Excursion: <span style="color: lightgreen;">What is a view? What is a materialized view in a relational database like PostgreSQL?</span>

--

<span style='color: lightgreen'>What can be high cost drivers in a pure data warehouse architecture?</span>

---

<span style="color: orange;">Data Lake</span>

--

<img
  src="../assets/data_management/imgs/imgs.003.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

---

<span style="color: orange;">Hybrid Data Lake</span>

--

<img
  src="../assets/data_management/imgs/imgs.004.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

---

<span style="color: orange;">Data Lakehouse</span>

--

<img
  src="../assets/data_management/imgs/imgs.005.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

---

<span style='color:red'>Don't think of these architectures as being set in stone. They all have advantages and disadvantages and are applied in modified and combined forms.</span>

---

<span style="color: orange;">Deep-dive into lyvy's architecture</span>

---

<span style="color: orange;">Deep-dive into a realtime architecture</span>

---

<span style="color: orange;">Exercise</span>: Design and Critique a Data Management Architecture yourself

--

<span style="color: orange;">Scenario</span>

<ol class="small-text">
You are a consultant tasked with designing a data management architecture for an upcoming start-up, called DebtRay, handling sensitive and expensive raw data from multiple providers (e.g. Bloomberg, London Stock Exchange). The architecture must address several challenges, including cost, scalability, and flexibility.
</ol>

<ol class="small-text">DebtRay's business model is</ol>

--

<span style="color: orange;">Procedure</span>

<ol class="smaller-list">
<li>Design Phase
    <ul>
        <li>Based on the provided key points, draft a data management architecture that balances costs, risks, and scalability.</li>
        <li>Describe each component of your architecture and justify your decisions.</li>
    </ul>
</li>
<li>Comparison Phase
    <ul>
        <li>Compare your architecture to the provided actual architecture.</li>
        <li>Identify strengths and weaknesses of both approaches.</li>
    </ul>
</li>
<li>Critique Phase
    <ul>
        <li>Suggest improvements for the actual architecture and for your own design.</li>
        <li>Focus on aspects like scalability, cost efficiency, and handling schema changes.</li>
    </ul>
</li>
</ol>

--

<span style="color: orange;">Key Points</span>

- this and that

--

<span style="color: lightgreen;">Design and Critique a Data Management Architecture</span>

Checklist

<ol class = "small-list">
<li>How does your architecture address the economic risk associated with raw data?</li>
<li>Does your design support future scalability and modularity?</li>
<li>How do you handle schema changes in raw data?</li>
<li>Compare the costs of your architecture with the current one (e.g. storage, compute, backup).</li>
<li>What trade-offs did you make in your design, and why?</li>
</ol>

---

- Finops
- Data Availability (Retention time)
- live vs. prelive / staging vs. live
- snowflake vs. clickhouse
