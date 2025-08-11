import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';

function Sidebar() {
  const base = 'block rounded-md px-3 py-2 text-sm font-medium';
  const idle = 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';
  const active = 'bg-gray-100 text-gray-900';
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:gap-4 md:border-r md:border-gray-200 md:bg-white md:px-4 md:py-6">
      <div className="px-1">
        <div className="mb-4 text-lg font-semibold text-gray-900">WEBJ</div>
        <nav className="flex flex-col gap-1">
          <NavLink to="/" end className={({isActive})=>`${base} ${isActive?active:idle}`}>Início</NavLink>
          <NavLink to="/contatos" className={({isActive})=>`${base} ${isActive?active:idle}`}>Contatos</NavLink>
          <NavLink to="/grupos" className={({isActive})=>`${base} ${isActive?active:idle}`}>Grupos</NavLink>
          <NavLink to="/configuracoes" className={({isActive})=>`${base} ${isActive?active:idle}`}>Configurações</NavLink>
        </nav>
      </div>
    </aside>
  );
}

function MobileTopbar() {
  return (
    <div className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-base font-semibold text-gray-900">WEBJ</span>
      </div>
    </div>
  );
}

function PageInicio() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Início</h1>
        <p className="mt-1 text-sm text-gray-600">Visão geral do seu dashboard.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Área de gráfico 1 (placeholder)</div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Área de gráfico 2 (placeholder)</div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Área de gráfico 3 (placeholder)</div>
      </section>
    </div>
  );
}

function PageContatos() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Contatos</h1>
        <p className="mt-1 text-sm text-gray-600">Gerencie seus contatos.</p>
      </header>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Lista de contatos (estrutura básica). Em breve: filtros, busca e ações.</div>
    </div>
  );
}

function PageGrupos() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Grupos</h1>
        <p className="mt-1 text-sm text-gray-600">Organize seus grupos.</p>
      </header>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Lista de grupos (estrutura básica). Em breve: criação, edição e membros.</div>
    </div>
  );
}

function PageConfiguracoes() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Configurações</h1>
        <p className="mt-1 text-sm text-gray-600">Preferências do aplicativo.</p>
      </header>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Tema</h2>
            <p className="mt-1 text-sm text-gray-600">Claro (padrão minimalista)</p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Idioma</h2>
            <p className="mt-1 text-sm text-gray-600">Português (Brasil)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex bg-white">
        <MobileTopbar />
        <Sidebar />
        <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 bg-white">
          <Routes>
            <Route path="/" element={<PageInicio />} />
            <Route path="/contatos" element={<PageContatos />} />
            <Route path="/grupos" element={<PageGrupos />} />
            <Route path="/configuracoes" element={<PageConfiguracoes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
