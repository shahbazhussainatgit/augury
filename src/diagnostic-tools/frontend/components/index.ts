import { DiagTabComponent } from './tab/tab.component';
import { FunctionDiagnosticComponent } from './function-diagnostic/function-diagnostic.component';
import { DiagSidebarComponent } from './sidebar/sidebar.component';
import { DiagTreeNodeComponent } from './diag-tree-node/diag-tree-node.component';
import { GenericTabsComponent } from './generic-tabs/generic-tabs.component';

const DIAG_COMPONENTS = [
  DiagTabComponent,
  FunctionDiagnosticComponent,
  DiagSidebarComponent,
  DiagTreeNodeComponent,
  GenericTabsComponent,
];

export {
  DiagTabComponent,
  DIAG_COMPONENTS
};