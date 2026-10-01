export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  weight: string;
  description: string;
  imageUrl: string;
  clickUrl: string;
  badge: string;
  badgeColor?: string;
  category: 'all' | 'bestseller' | 'family' | 'fillet';
  contents: string[];
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatarBg: string;
  initials: string;
  date?: string;
}
