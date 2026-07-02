Singapore is ageing faster than almost anywhere in the world. On official projections, around one in four citizens will be 65 or older by 2030, and the infrastructure that supports older people, from neighbourhood drop-in centres to residential homes, is quietly expanding to meet it.

data.gov.sg publishes a Ministry of Health dataset of **133 eldercare facilities** across Singapore, last updated in June 2024. Once parsed into a clean table, it can answer three plain questions: what kinds of care exist, who runs them, and where they are. The map above plots all 133, coloured by service type.

## What kind of care?

![Number of eldercare facilities by service type](/images/eldercare-service-mix.png)

The network is dominated by **Senior Activity Centres**, but it spans six distinct models of care:

- **Senior Activity Centres (76)**: community drop-in hubs, usually in the void decks of HDB rental blocks, offering activities, meals, and befriending for nearby seniors, including regular check-ins on those living alone.
- **Residential Homes (25)**: live-in homes providing long-term residential and nursing care for older people who can no longer live independently.
- **Care / Wellness Centres (9)**: day centres seniors attend for activities, day care, or rehabilitation, returning home at night.
- **Cluster Support (9)**: teams that coordinate care and support for seniors across a geographic cluster of blocks, rather than a single walk-in venue.
- **Other / Operator HQ (9)**: administrative or head-office locations rather than a service point (a by-product of how facilities are named in the data).
- **Senior Group Homes (5)**: a newer supported-living model where a small group of seniors shares a flat with on-site help, sitting between living alone and a nursing home.

Most of Singapore's eldercare, in other words, is built to keep older people *in* their community rather than move them out of it. The residential and group-home tiers together are far smaller than the drop-in and day-care network around them.

## Who runs them?

![Facilities per named operator](/images/eldercare-operators.png)

Provision is largely by Voluntary Welfare Organisations. THK (Thye Hua Kwan) runs by far the most, followed by Lions Befrienders and Care Corner. A small number of organisations carry a large share of the network, which is worth knowing for anyone thinking about partnerships or referral routing.

## Where are they?

![Facilities by region, split by service type](/images/eldercare-region.png)

Grouped by region, the Central belt leads by a wide margin, followed by the east; the North is thinnest.

![Top 12 postal sectors by facility count](/images/eldercare-hotspots.png)

Zooming to postal sectors, the densest are mature neighbourhoods like Ang Mo Kio / Bishan, Katong / Marine Parade, Toa Payoh, Bedok, areas with some of the oldest resident populations in the country. The map at the top shows the same pattern spatially: denser through the centre and east, thinning toward the western and northern edges.

> **What the data hides**
>
> These charts describe *supply*, not *access*. A region with few facilities may simply have few older residents. To judge whether provision matches need, you would divide facilities by the elderly population of each area, which this dataset does not carry. Service type, operator, and region are all inferred from names and postal codes, not an official registry, so a handful of facilities will be mislabelled. And this is a single snapshot: it shows where the network is today, not how fast it is growing toward a population that will be one-quarter aged 65+ by 2030.

---

*Data: [Eldercare Services, data.gov.sg](https://data.gov.sg/). [View the notebook →](https://github.com/laureltay9/laureltay.github.io/blob/main/notebooks/eldercare.ipynb)*
