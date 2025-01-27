export const pages = {
  root: () => '/',
  flowRuns: () => '/runs',
  flowRun: (id: string) => `/flow-run/${id}`,
  flowRunRadar: (id: string) => `/flow-run/${id}/radar`,
  flows: () => '/flows',
  flow: (id: string) => `/flow/${id}`,
  deployments: () => '/deployments',
  deployment: (id: string) => `deployments/deployment/${id}`,
  deploymentEdit: (id: string) => `deployments/deployment/${id}/edit`,
  workQueues: () => '/work-queues',
  workQueue: (id: string) => `/work-queues/work-queue/${id}`,
  workQueuesCreate: () => '/work-queues/new',
  workQueueEdit: (id: string) => `work-queues/work-queue/${id}`,
  blocks: () => '/blocks',
  blocksCatalog: () => '/blocks/catalog',
  blocksCatalogView: (blockTypeSlug: string) => `/blocks/catalog/${blockTypeSlug}`,
  blocksCatalogCreate: (blockTypeSlug: string) => `/blocks/catalog/${blockTypeSlug}/create`,
  block: (id: string) => `blocks/block/${id}`,
  blockEdit: (id: string) => `blocks/block/${id}/edit`,
  notifications: () => '/notifications',
  notificationsCreate: () => '/notifications/new',
  notificationEdit: (id: string) => `/notifications/${id}`,
  settings: () => '/settings',
}